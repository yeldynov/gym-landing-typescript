import Logo from "@/assets/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            praesentium fugiat vel dignissimos dolore officiis nihil quos, quod
            quaerat at.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link number One.</p>
          <p className="my-5">Second Link.</p>
          <p className="my-5">The third One.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Kharkiv, Ukraine</p>
          <p className="my-5">yeldynov@gmail.com</p>
          <p className="my-5">+380 97 96 93 424</p>
        </div>
      </div>
    </footer>
  );
}
