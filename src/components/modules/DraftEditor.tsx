import React, { useState, useEffect } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import css from './DraftEditor.module.scss'
import EmojiToolbar from './editor-toolbar/EmojiToolbar'
import LinkToolbar from './editor-toolbar/LinkToolbar'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

type Props = {
    onChange: (state: string) => void
}

const DraftEditor = ({ onChange }: Props) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const onEditorStateChange = (newState: EditorState) => {
        setEditorState(newState)
    }

    useEffect(() => {
        const json = convertToRaw(editorState.getCurrentContent())
        onChange(json.blocks[0].text)
    }, [onChange, editorState])

    return (
        <div className={css.editor}>
            <Editor
                editorState={editorState}
                wrapperClassName={css.editorWrapper}
                toolbarClassName={css.editorToolbar}
                editorClassName={css.editorInput}
                onEditorStateChange={onEditorStateChange}
                toolbarCustomButtons={[<LinkToolbar key="link" />, <EmojiToolbar key="emoji" />]}
                toolbar={{
                    options: ['inline', 'list'],
                    inline: {
                        inDropdown: false,
                        options: ['bold', 'italic', 'underline', 'strikethrough'],
                    },
                    list: {
                        inDropdown: false,
                        options: ['unordered', 'ordered'],
                    },
                    // link: {
                    //     inDropdown: false,
                    //     showOpenOptionOnHover: false,
                    //     defaultTargetOption: '_self',
                    //     options: ['link', 'unlink'],
                    // },
                }}
                localization={{
                    locale: 'ja',
                }}
            />
        </div>
    )
}

export default DraftEditor
