import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-6 mb-8">
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          Invoicepedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">Created with ❤️ by hammadhz</p>
      </Container>
    </footer>
  );
};

export default Footer;
