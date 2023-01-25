import React from 'react'
import { links } from "./myLinks";


export default function Links() {
  return (
    <React.Fragment>
        {links.map((obj)=>(
            !obj.sublinks ?
            <React.Fragment key={obj.key}>
                <li><a href={`#${obj.title}`} className="link">{obj.title}</a></li>
            </React.Fragment>
            :
            <React.Fragment key={obj.key}>
                <li><h1 className="link">{obj.title}<i className='bx bx-chevron-down' ></i></h1>
                    <ul className="dropdown">
                    {obj.links.map((obj2)=>(
                        !obj2.sublinks ?
                        <React.Fragment key={obj2.key}>
                            <li><a href={`#${obj2.title}`} className="link">{obj2.title}</a></li>
                        </React.Fragment>
                        :
                        <React.Fragment key={obj2.key}>
                            <li><h1 className='link'>{obj2.title}<i className='bx bx-chevron-down' ></i></h1>
                                <ul className="dropdown second">
                                {obj2.links.map((obj3)=>(
                                    !obj3.sublinks ?
                                    <React.Fragment key={obj3.key}>
                                        <li><a href={`#${obj3.title}`} className="link">{obj3.title}</a></li>
                                    </React.Fragment>
                                    :
                                    <React.Fragment key={obj3.key}>
                                        <li><h1 className='link'>{obj3.title}<i className='bx bx-chevron-down' ></i></h1>
                                            <ul className="dropdown second">
                                            {obj3.links.map((obj4)=>(
                                                !obj4.sublinks ?
                                                <React.Fragment key={obj4.key}>
                                                    <li><a href={`#${obj4.title}`} className="link">{obj4.title}</a></li>
                                                </React.Fragment>
                                                :
                                                <React.Fragment key={obj4.key}>
                                                    <li><h1 className='link'>{obj4.title}<i className='bx bx-chevron-down' ></i></h1>
                                                    </li>
                                                </React.Fragment>
                                            ))}
                                            <i className="arrow"><i></i></i>
                                            </ul>
                                        </li>
                                    </React.Fragment>
                                ))}
                                <i className="arrow"><i></i></i>
                                </ul>
                            </li>
                        </React.Fragment>
                    ))}
                    <i className="arrow"><i></i></i>
                    </ul>
                </li>
            </React.Fragment>
        ))}
    </React.Fragment>
  )
}
