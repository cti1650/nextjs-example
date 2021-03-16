import styles from "./Textbox.module.css";

function MembersTextbox(props) {
    return (
        <>
            <textarea
                name="members_list"
                id="textarea"
                className="border-0 outline-none block rounded-lg w-full my-4"
                placeholder="メンバーをドラッグ&ドロップ"
            >
            </textarea>
        </>
    )
}

export default MembersTextbox

