export default function Footer({ items }) {
  if (items.length < 1) {
    return <footer className="stats"> Daftar Belanjaan Masih Kosong</footer>;
  }

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percetage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percetage}%)
    </footer>
  );
}
