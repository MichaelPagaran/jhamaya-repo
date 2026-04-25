export default function Footer() {
    return (
        <footer className="border-t border-gray-200 py-8 mt-16">
            <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
        </footer>
    );
}
