import { useState } from "react";
import "./index.css";
import { declination } from "../../helpers/index";

export function UserProfiler({ title }: any){
    const [details, setDetails] = useState(false);

    return(
        <div className="modal-window">
            <h2>{title}</h2>
            <button
                onClick={()=> setDetails(prev => !prev)}
            >Редактировать</button>
            <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora in, minus incidunt eligendi, nobis at nam, totam tempore quos beatae! Eligendi magni nobis labore ipsum aliquid laboriosam vitae sunt!
                        </div>
            {/* <h2>{"title"}</h2>
            {users.map((item: any) =>
                <div key={item.id}>ФИО: {item.name}
                    <div>город: {item.address.city}</div>
                    <div>компания: {item.company.name} </div>
                    <button
                        onClick={() => setDetails(prev => !prev)}
                    >
                        Подробнее</button>
                </div>)}
            {details && <div className="modal-window">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tempora in, minus incidunt eligendi, nobis at nam, totam tempore quos beatae! Eligendi magni nobis labore ipsum aliquid laboriosam vitae sunt!
                        </div>}
                        <div><b>Найдено {users.length} пользователей</b></div> */}
        </div>
    )
}