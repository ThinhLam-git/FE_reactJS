import { memo, useState } from "react";
import "./style.scss";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineUser,
    AiOutlineMail,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formatter";
import { ROUTERS } from "utils/router";

const Header = () => {

    const [menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.SHOP
        },
        {
            name: "Sản phẩm",
            path: ROUTERS.USER.PRODUCTS,
            isShowSubMenu: false,
            child: [
                {
                    name: "Thịt",
                    path: ""
                },
                {
                    name: "Rau củ",
                    path: ""
                },
                {
                    name: "Thức ăn nhanh",
                    path: ""
                }
            ]
        },
        {
            name: "Bài viết",
            path: ROUTERS.USER.BLOG
        },
        {
            name: "Liên hệ",
            path: ROUTERS.USER.CONTACTS
        },
    ])

    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    ltthinh111@gmail.com
                                </li>
                                <li>
                                    Miễn phí giao hàng cho đơn hàng trên {formatter(200000)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineGithub />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Đăng nhập</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>Fruit Shop</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {
                                    menus?.map((menu, index) => (
                                        <li key={index} className={index === 0 ? "isActived" : ""}>
                                            <Link to={menu?.path}>
                                                {menu?.name}
                                            </Link>
                                            {
                                                menu?.child && menu?.child.length > 0 && (
                                                    <ul className="header_submenu">
                                                        {
                                                            menu?.child?.map((subMenu, subIndex) => (
                                                                <li key={`${subIndex}-${index}`}>
                                                                    <Link to={subMenu.path}>{subMenu.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formatter(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to={''}>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
};

export default memo(Header);
