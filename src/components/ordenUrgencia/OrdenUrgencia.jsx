export default function OrdenUrgencia({ onCambiarOrden }) {
  return (
    <select onChange={(e) => onCambiarOrden(e.target.value)}>
      <option value="none">Orden de creacion</option>
      <option value="asc">Por urgencia (Asc.)</option>
      <option value="desc">Por urgencia (Desc.)</option>
    </select>
  );
}
