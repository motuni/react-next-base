import React, { Component } from 'react'
import { EditorState, RichUtils, CompositeDecorator } from 'draft-js'
import PropTypes from 'prop-types'

class LinkToolbar extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        editorState: PropTypes.object,
    }

    constructor(props) {
        super(props)
        const { editorState } = this.props

        const decorator = new CompositeDecorator([
            {
                strategy: findLinkEntities,
                component: Link,
            },
        ])

        EditorState.set(editorState, { decorator: decorator })

        this.state = {
            currentState: 'unlink',
            show: false,
            linkURL: '',
            linkTitle: '',
            linkTarget: '_self',
        }

        this.promptForLink = this._promptForLink.bind(this)
        this.confirmLink = this._confirmLink.bind(this)
        this.removeLink = this._removeLink.bind(this)
    }

    _promptForLink(e) {
        e.preventDefault()

        const { editorState } = this.props
        const { show } = this.state
        const selection = editorState.getSelection()

        if (show) {
            this.hideModal()
            return
        }

        if (!selection.isCollapsed()) {
            const contentState = editorState.getCurrentContent()
            const startKey = editorState.getSelection().getStartKey()
            const startOffset = editorState.getSelection().getStartOffset()
            const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
            const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)

            let url = ''
            let title = ''
            let target = ''
            if (linkKey) {
                const linkInstance = contentState.getEntity(linkKey)
                url = linkInstance.getData().url
                title = linkInstance.getData().title
                target = linkInstance.getData().target
            }

            this.setState({
                show: true,
                currentState: 'link',
                linkURL: url,
                linkTitle: title,
                linkTarget: target,
            })
        }
    }

    _confirmLink(e) {
        e.preventDefault()
        const { state, linkURL, linkTitle, linkTarget } = this.state
        const { editorState, onChange } = this.props
        const contentState = editorState.getCurrentContent()
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
            url: linkURL,
            linkTitle: linkTitle,
            linkTarget: linkTarget,
        })
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity,
        })
        const richState = RichUtils.toggleLink(
            newEditorState,
            newEditorState.getSelection(),
            entityKey
        )

        onChange(EditorState.push(editorState, richState.getCurrentContent(), 'insert-characters'))
        this.setState({
            // state: richState,
            currentState: 'link',
            show: false,
            linkURL: '',
            linkTitle: '',
            linkTarget: '_self',
        })
    }

    _removeLink(e) {
        e.preventDefault()
        const { editorState, onChange } = this.props
        const selection = editorState.getSelection()
        if (!selection.isCollapsed()) {
            const richState = RichUtils.toggleLink(editorState, selection, null)
            onChange(
                EditorState.push(editorState, richState.getCurrentContent(), 'insert-characters')
            )
            this.setState({
                state: richState,
            })
        }
    }

    hideModal = () => {
        this.setState({
            show: false,
        })
    }

    // removeLink = () => {
    //     const { onChange } = this.props
    //     onChange('unlink')
    // }

    // addLink = () => {
    //     const { onChange } = this.props
    //     const { linkTitle, linkTarget, linkTargetOption } = this.state
    //     onChange('link', linkTitle, linkTarget, linkTargetOption)
    // }

    updateTitle = (event) => {
        this.setState({
            linkTitle: event.target.value,
        })
    }

    updateURL = (event) => {
        this.setState({
            linkURL: event.target.value,
        })
    }

    updateTarget = (event) => {
        this.setState({
            linkTarget: event.target.checked ? '_blank' : '_self',
        })
    }

    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.rdw-link-wrapper')) {
                this.setState({
                    show: false,
                })
            }
        })
    }

    render() {
        const { currentState, show, linkURL, linkTitle, linkTarget } = this.state
        return (
            <>
                <div className="rdw-link-wrapper" aria-label="rdw-link-control">
                    <div
                        className="rdw-dropdown-wrapper rdw-link-dropdown"
                        aria-label="rdw-dropdown"
                        onClick={this.promptForLink}
                    >
                        <div className="rdw-dropdown-selectedtext" title="リンク">
                            <span>
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk2Ny45NUEzLjIyNiAzLjIyNiAwIDAgMCAxMS42Ny4wMDJjLS44NyAwLTEuNjg2LjMzNy0yLjI5Ny45NDhMNy4xMDUgMy4yMThBMy4yNDcgMy4yNDcgMCAwIDAgNi4yNCA2LjI0YTMuMjI1IDMuMjI1IDAgMCAwLTMuMDIyLjg2NUwuOTUgOS4zNzNhMy4yNTMgMy4yNTMgMCAwIDAgMCA0LjU5NCAzLjIyNiAzLjIyNiAwIDAgMCAyLjI5Ny45NDhjLjg3IDAgMS42ODYtLjMzNiAyLjI5OC0uOTQ4TDcuODEyIDExLjdhMy4yNDcgMy4yNDcgMCAwIDAgLjg2NS0zLjAyMyAzLjIyNSAzLjIyNSAwIDAgMCAzLjAyMi0uODY1bDIuMjY4LTIuMjY3YTMuMjUyIDMuMjUyIDAgMCAwIDAtNC41OTV6TTcuMTA1IDEwLjk5M0w0LjgzNyAxMy4yNmEyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NSAyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LS42NTUgMi4yNTIgMi4yNTIgMCAwIDEgMC0zLjE4bDIuMjY4LTIuMjY4YTIuMjMyIDIuMjMyIDAgMCAxIDEuNTktLjY1NWMuNDMgMCAuODQxLjEyIDEuMTk1LjM0M0w0Ljc3MiA5LjQzOGEuNS41IDAgMSAwIC43MDcuNzA3bDEuOTM5LTEuOTM4Yy41NDUuODY4LjQ0MiAyLjAzLS4zMTMgMi43ODV6bTYuMTU1LTYuMTU1bC0yLjI2OCAyLjI2N2EyLjIzMyAyLjIzMyAwIDAgMS0xLjU5LjY1NWMtLjQzMSAwLS44NDEtLjEyLTEuMTk1LS4zNDNsMS45MzgtMS45MzhhLjUuNSAwIDEgMC0uNzA3LS43MDdMNy40OTkgNi43MWEyLjI1MiAyLjI1MiAwIDAgMSAuMzEzLTIuNzg1bDIuMjY3LTIuMjY4YTIuMjMzIDIuMjMzIDAgMCAxIDEuNTktLjY1NSAyLjIzMyAyLjIzMyAwIDAgMSAyLjI0NiAyLjI0NWMwIC42MDMtLjIzMiAxLjE2OC0uNjU1IDEuNTl6IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="
                                    alt=""
                                />
                            </span>
                            <div className={`rdw-dropdown-caretto${show ? 'close' : 'open'}`}></div>
                        </div>
                    </div>
                    <div className={`rdw-link-modal ${show ? '' : 'rdw-modal-visible'}`}>
                        <label className="rdw-link-modal-label" htmlFor="linkTitle">
                            リンクタイトル
                        </label>
                        <input
                            id="linkTitle"
                            className="rdw-link-modal-input"
                            onChange={this.updateTitle}
                            onBlur={this.updateTitle}
                            value={linkTitle}
                        />
                        <label className="rdw-link-modal-label" htmlFor="linkTarget">
                            リンクURL
                        </label>
                        <input
                            id="linkURL"
                            className="rdw-link-modal-input"
                            onChange={this.updateURL}
                            onBlur={this.updateURL}
                            value={linkURL}
                        />
                        <label
                            className="rdw-link-modal-target-option"
                            htmlFor="openLinkInNewWindow"
                        >
                            <input
                                id="openLinkInNewWindow"
                                type="checkbox"
                                defaultChecked={linkTarget === '_blank'}
                                value="_blank"
                                onChange={this.updateTarget}
                            />
                            <span>新しいウィンドウで開く</span>
                        </label>

                        <span className="rdw-link-modal-buttonsection">
                            <button
                                className="rdw-link-modal-btn"
                                onClick={this.confirmLink}
                                disabled={!linkURL || !linkTitle}
                            >
                                追加
                            </button>
                            <button className="rdw-link-modal-btn" onClick={this.hideModal}>
                                キャンセル
                            </button>
                        </span>
                    </div>
                </div>
                <div
                    className={`${'rdw-option-wrapper'} ${
                        currentState === 'unlink' ? 'disabled' : ''
                    }`}
                    title="リンク解除"
                    onClick={() => {
                        if (currentState === 'unlink') {
                            return false
                        } else {
                            this.removeLink
                        }
                    }}
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuOTU2IDEuMDM3YTMuNTUgMy41NSAwIDAgMC01LjAxNCAwTDYuNDM2IDMuNTQ0YS41NDUuNTQ1IDAgMSAwIC43Ny43N2wyLjUwOC0yLjUwNmEyLjQzOCAyLjQzOCAwIDAgMSAxLjczNS0uNzE1Yy42NTggMCAxLjI3NS4yNTQgMS43MzYuNzE1LjQ2LjQ2MS43MTUgMS4wNzguNzE1IDEuNzM2IDAgLjY1OC0uMjU0IDEuMjc0LS43MTUgMS43MzVMOS45MDcgOC41NThhMi40NTggMi40NTggMCAwIDEtMy40NzIgMCAuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3MSAzLjUzNCAzLjUzNCAwIDAgMCAyLjUwNyAxLjAzN2MuOTA4IDAgMS44MTYtLjM0NiAyLjUwNy0xLjAzN2wzLjI3OC0zLjI3OGEzLjUyIDMuNTIgMCAwIDAgMS4wMzUtMi41MDdjMC0uOTUtLjM2Ny0xLjg0LTEuMDM1LTIuNTA3eiIvPjxwYXRoIGQ9Ik03LjQgMTEuMDY1bC0yLjEyMiAyLjEyYTIuNDM3IDIuNDM3IDAgMCAxLTEuNzM1LjcxNiAyLjQzNyAyLjQzNyAwIDAgMS0xLjczNi0uNzE1IDIuNDU3IDIuNDU3IDAgMCAxIDAtMy40NzFsMy4wODYtMy4wODZhMi40MzggMi40MzggMCAwIDEgMS43MzUtLjcxNWMuNjU4IDAgMS4yNzUuMjU0IDEuNzM2LjcxNWEuNTQ1LjU0NSAwIDEgMCAuNzcxLS43NzEgMy41NSAzLjU1IDAgMCAwLTUuMDE0IDBMMS4wMzYgOC45NDRBMy41MiAzLjUyIDAgMCAwIDAgMTEuNDVjMCAuOTUuMzY3IDEuODQgMS4wMzUgMi41MDdhMy41MiAzLjUyIDAgMCAwIDIuNTA2IDEuMDM1Yy45NSAwIDEuODQtLjM2OCAyLjUwNy0xLjAzNWwyLjEyMi0yLjEyMWEuNTQ1LjU0NSAwIDAgMC0uNzcxLS43NzF6TTkuMjc0IDEyLjAwMmEuNTQ2LjU0NiAwIDAgMC0uNTQ2LjU0NXYxLjYzN2EuNTQ2LjU0NiAwIDAgMCAxLjA5MSAwdi0xLjYzN2EuNTQ1LjU0NSAwIDAgMC0uNTQ1LS41NDV6TTExLjIzIDExLjYxNmEuNTQ1LjU0NSAwIDEgMC0uNzcyLjc3MmwxLjE1NyAxLjE1NmEuNTQzLjU0MyAwIDAgMCAuNzcxIDAgLjU0NS41NDUgMCAwIDAgMC0uNzdsLTEuMTU2LTEuMTU4ek0xMi41MzcgOS44MkgxMC45YS41NDYuNTQ2IDAgMCAwIDAgMS4wOTFoMS42MzdhLjU0Ni41NDYgMCAwIDAgMC0xLjA5ek00LjkxIDMuNTQ3YS41NDYuNTQ2IDAgMCAwIC41NDUtLjU0NVYxLjM2NmEuNTQ2LjU0NiAwIDAgMC0xLjA5IDB2MS42MzZjMCAuMzAxLjI0NC41NDUuNTQ1LjU0NXpNMi44ODggMy45MzNhLjU0My41NDMgMCAwIDAgLjc3MSAwIC41NDUuNTQ1IDAgMCAwIDAtLjc3MUwyLjUwMiAyLjAwNWEuNTQ1LjU0NSAwIDEgMC0uNzcxLjc3bDEuMTU3IDEuMTU4ek0xLjYyOCA1LjczaDEuNjM2YS41NDYuNTQ2IDAgMCAwIDAtMS4wOTJIMS42MjhhLjU0Ni41NDYgMCAwIDAgMCAxLjA5MXoiLz48L2c+PC9zdmc+"
                        alt=""
                    />
                </div>
            </>
        )
    }
}

function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges((character) => {
        const entityKey = character.getEntity()
        return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
    }, callback)
}

const Link = (props) => {
    const { url } = props.contentState.getEntity(props.entityKey).getData()
    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            {props.children}
        </a>
    )
}

export default LinkToolbar
