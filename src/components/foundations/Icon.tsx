import React from 'react'
import { FCProps } from 'types/Props'
import css from './Icon.module.scss'

export const SendMessageIcon = () => {
    return (
        <>
            <div className={css.sendMessageIcon}>
                <img src="/img/icon_send_message.svg" alt="" />
            </div>
        </>
    )
}

export const PhotoLibraryIcon = () => {
    return (
        <>
            <div className={css.photoLibraryIcon}>
                <img src="/img/icon_photo_library.svg" alt="" />
            </div>
        </>
    )
}

export const CameraShotIcon = () => {
    return (
        <>
            <div className={css.cameraShotIcon}>
                <img src="/img/icon_camera_shot.svg" alt="" />
            </div>
        </>
    )
}

export const ChatAvatarIcon = () => {
    return (
        <>
            <div className={css.chatAvatarIcon}>
                <img src="/img/icon_chat_avatar.svg" alt="" />
            </div>
        </>
    )
}

export const CalendarIcon = () => {
    return (
        <>
            <div className={css.calendarIcon}>
                <img src="/img/icon_calendar.svg" alt="" />
            </div>
        </>
    )
}

type FileUploadIconProps = {
    disabled?: boolean
}

export const FileUploadIcon = ({ disabled }: FileUploadIconProps) => {
    return (
        <div className={css.fileUploadIcon}>
            {disabled ? (
                <img src="/img/icon_file_upload_disabled.svg" alt="" />
            ) : (
                <img src="/img/icon_file_upload.svg" alt="" />
            )}
        </div>
    )
}

export const TrashCanIcon = ({ disabled }: FileUploadIconProps) => {
    return (
        <div className={css.trashCanIcon}>
            {disabled ? (
                <img src="/img/icon_trashcan_disabled.svg" alt="" />
            ) : (
                <img src="/img/icon_trashcan.svg" alt="" />
            )}
        </div>
    )
}

export const ContentAddIcon = ({ disabled }: FileUploadIconProps) => {
    return (
        <div className={css.contentAddIcon}>
            {disabled ? (
                <img src="/img/icon_content_add_disabled.svg" alt="" />
            ) : (
                <img src="/img/icon_content_add.svg" alt="" />
            )}
        </div>
    )
}

export const ContentRemoveIcon = ({ disabled }: FileUploadIconProps) => {
    return (
        <div className={css.contentRemove}>
            {disabled ? (
                <img src="/img/icon_content_remove_disabled.svg" alt="" />
            ) : (
                <img src="/img/icon_content_remove.svg" alt="" />
            )}
        </div>
    )
}

export const ImageAddIconWith = ({ children }: FCProps) => {
    return <div className={css.imageAddIconWith}>{children}</div>
}

export const CalendarPrevIcon = () => {
    return (
        <div className={css.calendarPrevIcon}>
            <img src="/img/icon_calendar_arrow_prev.svg" alt="" />
        </div>
    )
}

export const CalendarNextIcon = () => {
    return (
        <div className={css.calendarNextIcon}>
            <img src="/img/icon_calendar_arrow_next.svg" alt="" />
        </div>
    )
}

export const CalendarEventIcon = () => {
    return (
        <div className={css.calendarEventIcon}>
            <img src="/img/icon_calendar_event.svg" alt="" />
        </div>
    )
}

export const MapCurrentIcon = () => {
    return (
        <div className={css.mapCurrentIcon}>
            <img src="/img/icon_map_current.svg" alt="" />
        </div>
    )
}

// background icon

export const CalendarIconWith = ({ children }: FCProps) => {
    return <div className={css.calendarIconWith}>{children}</div>
}
