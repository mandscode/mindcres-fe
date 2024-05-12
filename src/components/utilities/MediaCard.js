const MediaCard = ({img, typo, page = undefined}) => {
    return (
        <>
            <div className={`_media_card ${page == undefined ? '' : page }`}>
                <img src={`/assets/imgs/utils/${img}`}/>
                <span>{typo}</span>
            </div>
        </>
    );
}
 
export default MediaCard;