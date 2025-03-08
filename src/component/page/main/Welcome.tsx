"use client";
import Image from "next/image";
import scss from "./Welcome.module.scss";
import ballon from "../../assets/img/ballon.png";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className={scss.welcomeBg}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text}>
              <h1>TORK A.S</h1>
              <h6>
                Современные автоматы для покупки газовых баллонов – быстро,
                удобно, безопасно!
              </h6>
              <button>Подробнее</button>
            </div>
            <Image src={ballon} alt="ballon" width={300} height={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
