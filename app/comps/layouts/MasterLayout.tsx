import React, { Component } from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { IoMdLogOut, IoMdHelpBuoy } from "react-icons/io";
import { RiDonutChartFill, RiFolder5Line, RiHandCoinLine, RiGroup2Fill, RiSettings4Fill } from "react-icons/ri";

class MasterLayout extends Component<any, any> {
    render() {
        const { children } = this.props;
        return (
            <div className="grid-c-1-a">
                <div className="grid-r-a-1">
                    <nav className="nav nav-top wire-b">
                        <ul className="left">
                            <li>
                                <a href="/master">
                                    <span>Master</span>
                                    <span className="txt-sm pad-x-sm">Dashboard</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="right">
                            <li>
                                <a href="/api/auth/signout" className="is-icon">
                                    <IoMdLogOut />
                                </a>
                            </li>
                            <li>
                                <a href="/help" className="is-icon">
                                    <IoMdHelpBuoy />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <section className="grid-c-a-1">
                        <nav className="nav nav-side nav-left wire-r">
                            <ul className="top">
                                <li>
                                    <a href="/master" className="is-icon">
                                        <RiDonutChartFill />
                                    </a>
                                </li>
                            </ul>
                            <ul className="middle">
                                <li>
                                    <a href="/master" className="is-icon">
                                        <RiFolder5Line />
                                    </a>
                                </li>
                                <li>
                                    <a href="/master" className="is-icon">
                                        <AiOutlineCloudServer />
                                    </a>
                                </li>
                                <li>
                                    <a href="/master" className="is-icon">
                                        <RiHandCoinLine />
                                    </a>
                                </li>
                            </ul>
                            <ul className="bottom">
                                <li>
                                    <a href="/master" className="is-icon">
                                        <RiGroup2Fill />
                                    </a>
                                </li>
                                <li>
                                    <a href="/master" className="is-icon">
                                        <RiSettings4Fill />
                                    </a>
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
