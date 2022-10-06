import React, { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Wrapper } from 'components/layouts/Wrapper'
import DefaultLayout from 'components/templates/DefaultLayout'

const DraftEditor = dynamic(() => import('components/modules/DraftEditor'), { ssr: false })

const EditorPage: NextPage = () => {
    const onChangeState = (state: string) => {
        console.log('本文コンテンツ', state)
    }

    return (
        <>
            <DefaultLayout>
                <Wrapper>
                    <h2>WYSIWYG Editor（Draft.js）</h2>
                    <br />
                    <br />
                    <Stack m="auto" width="600px">
                        <DraftEditor onChange={onChangeState} />
                    </Stack>
                    {/* <Editor
                        // toolbarHidden
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        // wrapperClassName={formCss.editorWrapper}
                        // editorClassName={formCss.editorMain}
                        // toolbarClassName={formCss.editorToolbar}
                        toolbar={{
                            options: [
                                'inline',
                                'blockType',
                                'fontSize',
                                'fontFamily',
                                'list',
                                'textAlign',
                                'colorPicker',
                                'link',
                                'embedded',
                                'emoji',
                                'image',
                                'remove',
                                'history',
                            ],
                            inline: {
                                inDropdown: false,
                                options: [
                                    'bold',
                                    'italic',
                                    'underline',
                                    'strikethrough',
                                    'monospace',
                                    'superscript',
                                    'subscript',
                                ],
                            },
                            blockType: {
                                inDropdown: true,
                                options: [
                                    'Normal',
                                    'H1',
                                    'H2',
                                    'H3',
                                    'H4',
                                    'H5',
                                    'H6',
                                    'Blockquote',
                                    'Code',
                                ],
                            },
                            fontSize: {
                                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                            },
                            fontFamily: {
                                options: [
                                    'Arial',
                                    'Georgia',
                                    'Impact',
                                    'Tahoma',
                                    'Times New Roman',
                                    'Verdana',
                                ],
                            },
                            list: {
                                inDropdown: false,
                                options: ['unordered', 'ordered', 'indent', 'outdent'],
                            },
                            textAlign: {
                                inDropdown: false,
                                options: ['left', 'center', 'right', 'justify'],
                            },
                            link: {
                                inDropdown: false,
                                showOpenOptionOnHover: true,
                                defaultTargetOption: '_self',
                                options: ['link', 'unlink'],
                            },
                        }}
                    /> */}
                </Wrapper>
            </DefaultLayout>
        </>
    )
}

export default EditorPage
