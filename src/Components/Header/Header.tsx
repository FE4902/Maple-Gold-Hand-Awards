import S from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={S.container}>
            <ul className={S.list}>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        헤어
                    </a>
                </li>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        성형
                    </a>
                </li>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        의상
                    </a>
                </li>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        펫
                    </a>
                </li>
            </ul>
            <ul className={S.list}>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        검색
                    </a>
                </li>
                <li className={S.item}>
                    <a className={S.link} href="#">
                        찜
                    </a>
                </li>
                <li className={S.item}>
                    <button className={S.button}>다크모드</button>
                </li>
            </ul>
        </header>
    );
};
