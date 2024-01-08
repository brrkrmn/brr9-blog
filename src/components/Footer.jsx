export function Footer () {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="container text-center py-6 text-sm">Berra Karaman • &copy; Copyright {currentYear} </p>
    </footer>
  )
}