import { useState } from "react";
import {UserProfiler} from "../userprofiler";
import { declination } from "../../helpers/index";
import "./index.css";

export function UserItem({users, title}: any){
    const [details, setDetails] = useState(false);

    return(
        <div className="user-list">
            <h2 className="user-list__title">{title}</h2>
            {users.map((item: any) =>
                <div className="user-list__item" key={item.id}>
                    <div><span>ФИО:</span> {item.name}</div>
                    <div>город: {item.address.city}</div>
                    <div className="user-list__iten__company-name">компания: {item.company.name}
                    <button
                        onClick={() => setDetails(prev => !prev)}
                    >
                        Подробнее</button>
                    </div>
                </div>)}
            {details && <UserProfiler title={"Профиль пользоваетля"}/>}
                        <div className="user-list__total-score">Найдено {users.length} пользователей</div>
        </div>
    )
}