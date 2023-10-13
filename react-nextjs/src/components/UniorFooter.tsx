const Footer: React.FC = () => {
    return (
        <footer>
            <hr className="mt-5 mb-4" />
            <p className="text-muted">
                Created and open sourced by the Bootstrap team. Licensed MIT.
            </p>
            <p className="text-muted">
                &copy; {new Date().getFullYear()} Unior. Created by realtheme.
            </p>
        </footer>
    );
};
  
export default Footer;
