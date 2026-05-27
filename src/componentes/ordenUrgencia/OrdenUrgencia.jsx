import "./OrdenUrgencia.css";
export default function OrdenUrgencia (){

    return(
        <select>
            <option value="none">Sin orden</option>
            <option value="asc">Por urgencia (Asc.)</option>
            <option value="desc">Por urgencia (Desc.)</option>
        </select>
    )
}