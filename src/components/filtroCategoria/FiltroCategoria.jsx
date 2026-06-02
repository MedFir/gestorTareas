export default function FiltroCategoria({ onCambiarFiltro }) {
  return (
    <select onChange={(e) => onCambiarFiltro(e.target.value)}>
      <option value="none">Sin filtro</option>
      <option value="trabajo">Categoria: "Trabajo"</option>
      <option value="hogar">Categoria: "Hogar"</option>
      <option value="pagos">Categoria: "Pagos"</option>
      <option value="aprendizaje">Categoria: "Aprendizaje"</option>
      <option value="deberes">Categoria: "Deberes"</option>
    </select>
  );
}
