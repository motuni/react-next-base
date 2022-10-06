import React, { Component } from 'react'
import { EditorState, Modifier } from 'draft-js'
import PropTypes from 'prop-types'

class EmojiToolbar extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        editorState: PropTypes.object,
    }
    state = {
        open: false,
    }
    openPlaceholderDropdown = () => this.setState({ open: !this.state.open })
    addPlaceholder = (placeholder) => {
        const { editorState, onChange } = this.props
        const contentState = Modifier.replaceText(
            editorState.getCurrentContent(),
            editorState.getSelection(),
            placeholder,
            editorState.getCurrentInlineStyle()
        )
        onChange(EditorState.push(editorState, contentState, 'insert-characters'))
    }
    componentDidMount() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.rdw-emoji-wrapper') && !e.target.closest('.rdw-emoji-modal')) {
                this.setState({ open: false })
            }
        })
    }
    placeholderOptions = [
        { key: '😀', value: '😀', text: '😀' },
        { key: '😁', value: '😁', text: '😁' },
        { key: '😂', value: '😂', text: '😂' },
        { key: '😃', value: '😃', text: '😃' },
        { key: '😉', value: '😉', text: '😉' },
        { key: '😋', value: '😋', text: '😋' },
        { key: '😎', value: '😎', text: '😎' },
        { key: '😍', value: '😍', text: '😍' },
        { key: '😗', value: '😗', text: '😗' },
        { key: '🤗', value: '🤗', text: '🤗' },
        { key: '🤔', value: '🤔', text: '🤔' },
        { key: '😣', value: '😣', text: '😣' },
        { key: '😫', value: '😫', text: '😫' },
        { key: '😴', value: '😴', text: '😴' },
        { key: '😌', value: '😌', text: '😌' },
        { key: '🤓', value: '🤓', text: '🤓' },
        { key: '😛', value: '😛', text: '😛' },
        { key: '😜', value: '😜', text: '😜' },
        { key: '😠', value: '😠', text: '😠' },
        { key: '😇', value: '😇', text: '😇' },
        { key: '😷', value: '😷', text: '😷' },
        { key: '😈', value: '😈', text: '😈' },
        { key: '👻', value: '👻', text: '👻' },
        { key: '😺', value: '😺', text: '😺' },
        { key: '😸', value: '😸', text: '😸' },
        { key: '😹', value: '😹', text: '😹' },
        { key: '😻', value: '😻', text: '😻' },
        { key: '😼', value: '😼', text: '😼' },
        { key: '😽', value: '😽', text: '😽' },
        { key: '🙀', value: '🙀', text: '🙀' },
        { key: '🙈', value: '🙈', text: '🙈' },
        { key: '🙉', value: '🙉', text: '🙉' },
        { key: '🙊', value: '🙊', text: '🙊' },
        { key: '👼', value: '👼', text: '👼' },
        { key: '👮', value: '👮', text: '👮' },
        { key: '🕵', value: '🕵', text: '🕵' },
        { key: '💂', value: '💂', text: '💂' },
        { key: '👳', value: '👳', text: '👳' },
        { key: '🎅', value: '🎅', text: '🎅' },
        { key: '👸', value: '👸', text: '👸' },
        { key: '👰', value: '👰', text: '👰' },
        { key: '👲', value: '👲', text: '👲' },
        { key: '🙍', value: '🙍', text: '🙍' },
        { key: '🙇', value: '🙇', text: '🙇' },
        { key: '🚶', value: '🚶', text: '🚶' },
        { key: '🏃', value: '🏃', text: '🏃' },
        { key: '💃', value: '💃', text: '💃' },
        { key: '⛷', value: '⛷', text: '⛷' },
        { key: '🏂', value: '🏂', text: '🏂' },
        { key: '🏌', value: '🏌', text: '🏌' },
        { key: '🏄', value: '🏄', text: '🏄' },
        { key: '🚣', value: '🚣', text: '🚣' },
        { key: '🏊', value: '🏊', text: '🏊' },
        { key: '⛹', value: '⛹', text: '⛹' },
        { key: '🏋', value: '🏋', text: '🏋' },
        { key: '🚴', value: '🚴', text: '🚴' },
        { key: '👫', value: '👫', text: '👫' },
        { key: '💪', value: '💪', text: '💪' },
        { key: '👈', value: '👈', text: '👈' },
        { key: '👉', value: '👉', text: '👉' },
        { key: '👆', value: '👆', text: '👆' },
        { key: '🖕', value: '🖕', text: '🖕' },
        { key: '👇', value: '👇', text: '👇' },
        { key: '🖖', value: '🖖', text: '🖖' },
        { key: '🤘', value: '🤘', text: '🤘' },
        { key: '🖐', value: '🖐', text: '🖐' },
        { key: '👌', value: '👌', text: '👌' },
        { key: '👍', value: '👍', text: '👍' },
        { key: '👎', value: '👎', text: '👎' },
        { key: '✊', value: '✊', text: '✊' },
        { key: '👊', value: '👊', text: '👊' },
        { key: '👏', value: '👏', text: '👏' },
        { key: '🙌', value: '🙌', text: '🙌' },
        { key: '🙏', value: '🙏', text: '🙏' },
        { key: '🐵', value: '🐵', text: '🐵' },
        { key: '🐶', value: '🐶', text: '🐶' },
        { key: '🐇', value: '🐇', text: '🐇' },
        { key: '🐥', value: '🐥', text: '🐥' },
        { key: '🐸', value: '🐸', text: '🐸' },
        { key: '🐌', value: '🐌', text: '🐌' },
        { key: '🐛', value: '🐛', text: '🐛' },
        { key: '🐜', value: '🐜', text: '🐜' },
        { key: '🐝', value: '🐝', text: '🐝' },
        { key: '🍉', value: '🍉', text: '🍉' },
        { key: '🍄', value: '🍄', text: '🍄' },
        { key: '🍔', value: '🍔', text: '🍔' },
        { key: '🍤', value: '🍤', text: '🍤' },
        { key: '🍨', value: '🍨', text: '🍨' },
        { key: '🍪', value: '🍪', text: '🍪' },
        { key: '🎂', value: '🎂', text: '🎂' },
        { key: '🍰', value: '🍰', text: '🍰' },
        { key: '🍾', value: '🍾', text: '🍾' },
        { key: '🍷', value: '🍷', text: '🍷' },
        { key: '🍸', value: '🍸', text: '🍸' },
        { key: '🍺', value: '🍺', text: '🍺' },
        { key: '🌍', value: '🌍', text: '🌍' },
        { key: '🚑', value: '🚑', text: '🚑' },
        { key: '⏰', value: '⏰', text: '⏰' },
        { key: '🌙', value: '🌙', text: '🌙' },
        { key: '🌝', value: '🌝', text: '🌝' },
        { key: '🌞', value: '🌞', text: '🌞' },
        { key: '⭐', value: '⭐', text: '⭐' },
        { key: '🌟', value: '🌟', text: '🌟' },
        { key: '🌠', value: '🌠', text: '🌠' },
        { key: '🌨', value: '🌨', text: '🌨' },
        { key: '🌩', value: '🌩', text: '🌩' },
        { key: '⛄', value: '⛄', text: '⛄' },
        { key: '🔥', value: '🔥', text: '🔥' },
        { key: '🎄', value: '🎄', text: '🎄' },
        { key: '🎈', value: '🎈', text: '🎈' },
        { key: '🎉', value: '🎉', text: '🎉' },
        { key: '🎊', value: '🎊', text: '🎊' },
        { key: '🎁', value: '🎁', text: '🎁' },
        { key: '🎗', value: '🎗', text: '🎗' },
        { key: '🏀', value: '🏀', text: '🏀' },
        { key: '🏈', value: '🏈', text: '🏈' },
        { key: '🎲', value: '🎲', text: '🎲' },
        { key: '🔇', value: '🔇', text: '🔇' },
        { key: '🔈', value: '🔈', text: '🔈' },
        { key: '📣', value: '📣', text: '📣' },
        { key: '🔔', value: '🔔', text: '🔔' },
        { key: '🎵', value: '🎵', text: '🎵' },
        { key: '🎷', value: '🎷', text: '🎷' },
        { key: '💰', value: '💰', text: '💰' },
        { key: '🖊', value: '🖊', text: '🖊' },
        { key: '📅', value: '📅', text: '📅' },
        { key: '✅', value: '✅', text: '✅' },
        { key: '❎', value: '❎', text: '❎' },
        { key: '💯', value: '💯', text: '💯' },
    ]
    listItem = this.placeholderOptions.map((item) => (
        <li onClick={this.addPlaceholder.bind(this, item.value)} key={item.key}>
            <span className="rdw-emoji-icon" alt="">
                {item.text}
            </span>
        </li>
    ))

    render() {
        return (
            <div
                onClick={this.openPlaceholderDropdown}
                className="rdw-emoji-wrapper"
                aria-label="rdw-block-control"
            >
                <div className="rdw-dropdown-wrapper rdw-emoji-dropdown" aria-label="rdw-dropdown">
                    <div className="rdw-dropdown-selectedtext" title="絵文字">
                        <span>
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjE1LjcyOSAyMi4wODIgMTcgMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI5LjcwOCAyNS4xMDRjLTMuMDIxLTMuMDIyLTcuOTM3LTMuMDIyLTEwLjk1OCAwLTMuMDIxIDMuMDItMy4wMiA3LjkzNiAwIDEwLjk1OCAzLjAyMSAzLjAyIDcuOTM3IDMuMDIgMTAuOTU4LS4wMDEgMy4wMi0zLjAyMSAzLjAyLTcuOTM2IDAtMTAuOTU3em0tLjg0NSAxMC4xMTJhNi41NiA2LjU2IDAgMCAxLTkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAtOS4yNjcgNi41NiA2LjU2IDAgMCAxIDkuMjY4IDAgNi41NiA2LjU2IDAgMCAxIDAgOS4yNjd6bS03LjUyNC02LjczYS45MDYuOTA2IDAgMSAxIDEuODExIDAgLjkwNi45MDYgMCAwIDEtMS44MTEgMHptNC4xMDYgMGEuOTA2LjkwNiAwIDEgMSAxLjgxMiAwIC45MDYuOTA2IDAgMCAxLTEuODEyIDB6bTIuMTQxIDMuNzA4Yy0uNTYxIDEuMjk4LTEuODc1IDIuMTM3LTMuMzQ4IDIuMTM3LTEuNTA1IDAtMi44MjctLjg0My0zLjM2OS0yLjE0N2EuNDM4LjQzOCAwIDAgMSAuODEtLjMzNmMuNDA1Ljk3NiAxLjQxIDEuNjA3IDIuNTU5IDEuNjA3IDEuMTIzIDAgMi4xMjEtLjYzMSAyLjU0NC0xLjYwOGEuNDM4LjQzOCAwIDAgMSAuODA0LjM0N3oiLz48L3N2Zz4="
                                alt=""
                            />
                        </span>
                        <div
                            className={`rdw-dropdown-caretto${this.state.open ? 'close' : 'open'}`}
                        ></div>
                    </div>
                </div>
                <ul className={`rdw-emoji-modal ${this.state.open ? '' : 'rdw-modal-visible'}`}>
                    {this.listItem}
                </ul>
            </div>
        )
    }
}
export default EmojiToolbar
