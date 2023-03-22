import emptyState from "../../assets/images/empty-state.png";

export default function EmptyState() {
  return (
    <div className="empty-state">
      <img src={emptyState} alt="Magnifying glass" />
      <p>There are no items to display.</p>
      <p>Start adding some items.</p>
    </div>
  );
}
