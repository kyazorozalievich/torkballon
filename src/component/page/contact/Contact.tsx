"use client";
import scss from "./Contact.module.scss";
import img from "../../assets/img/contactImg.jpg";
import Image from "next/image";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaAngleRight, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <section className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <Image src={img} alt="contact" width={1500} height={500} />

          <div className={scss.data}>
            <div className={scss.texts}>
              <h1>We are always ready to help you and answer your questions</h1>
              <div className={scss.textBlocks}>
                <div className={scss.textContent}>
                  <div className={scss.contentPhone}>
                    <h3>Call Center</h3>
                    <h4>
                      +996 999-999-999 <br /> +996 777-777-777
                    </h4>
                  </div>
                  <div className={scss.contentEmail}>
                    <h3>Email</h3>
                    <h4>torkas@gmail.com</h4>
                  </div>
                </div>
                <div className={scss.textContent}>
                  <div className={scss.contentAddress}>
                    <h3>Our Location</h3>
                    <h4>
                      USA New York <br /> Str First Avenue1
                    </h4>
                  </div>

                  <div className={scss.contentTarget}>
                    <h3>Social network</h3>
                    <span>
                      <button>
                        <FaFacebookF />
                      </button>
                      <button>
                        <FaXTwitter />
                      </button>
                      <button>
                        <FaLinkedinIn />
                      </button>
                      <button>
                        <IoLogoYoutube />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.inputs}>
              <h2>Get in Touch</h2>
              <h4>Hello world world world world world world world wrold</h4>
              <form>
                <input
                  type="text"
                  placeholder="Full name..."
                  {...register("name", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Email..."
                  {...register("email", { required: true })}
                />
                <input
                  type="number"
                  placeholder="Phone..."
                  {...register("phone", { required: true })}
                />
                <textarea
                  placeholder="Message..."
                  {...register("message", { required: true })}
                ></textarea>

                <button type="submit">
                  <FaAngleRight />
                  Send message
                </button>
              </form>
            </div>
          </div>

          <Image
            src="https://i.pinimg.com/736x/75/4b/6e/754b6ec61a5edff12c4b43120255a52c.jpg"
            alt=""
            width={1000}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
