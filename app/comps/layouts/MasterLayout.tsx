import React, { Component } from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { IoMdLogOut, IoMdHelpBuoy } from "react-icons/io";
import { RiDonutChartFill, RiFolder5Line, RiHandCoinLine, RiGroup2Fill, RiSettings4Fill } from "react-icons/ri";
import Link from "next/link";

class MasterLayout extends Component<any, any> {
    render() {
        const { children } = this.props;
        return (
            <div className="grid-c-1-a">
                <div className="grid-r-a-1">
                    <nav className="nav nav-top wire-b">
                        <ul className="left">
                            <li>
                                <Link href="/master">
                                    <a>
                                        <span>Master</span>
                                        <span className="txt-sm pad-x-sm">Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="right">
                            <li>
                                <Link href="/api/auth/signout">
                                    <a className="is-icon">
                                        <IoMdLogOut />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/helps">
                                    <a className="is-icon">
                                        <IoMdHelpBuoy />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <section className="grid-c-a-1">
                        <nav className="nav nav-side nav-left wire-r">
                            <ul className="top">
                                <li>
                                    <Link href="/master">
                                        <a className="is-icon">
                                            <RiDonutChartFill />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="middle">
                                <li>
                                    <Link href="/master">
                                        <a className="is-icon">
                                            <RiFolder5Line />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/master/hosts">
                                        <a className="is-icon">
                                            <AiOutlineCloudServer />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/master/invoices">
                                        <a className="is-icon">
                                            <RiHandCoinLine />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="bottom">
                                <li>
                                    <Link href="/master/users">
                                        <a className="is-icon">
                                            <RiGroup2Fill />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/master/settings">
                                        <a className="is-icon">
                                            <RiSettings4Fill />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="grid-r-1-a">
                            <div className="rows">{children}</div>
                            <div className="footer wire-t">
                                <div className="txt-sm">&copy; InMarketify 2021</div>
                            </div>
                        </div>
                    </section>
                </div>
                <aside className="wire-l w-300">
                    <div className="pad">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi beatae totam in quod ducimus commodi perferendis eum ab officiis maxime ad saepe sapiente sequi, tenetur
                        quia laudantium itaque excepturi.
                    </div>
                </aside>
            </div>
        );
    }
}

export default MasterLayout;
