import S from "./Card.module.scss";

export const Card = () => {
    return (
        <div className={S.container}>
            <div className={S.header}></div>
            <div className={S.body}>
                <div className={S.title}></div>
                <div className={S.author}></div>
            </div>
        </div>
    );
};
