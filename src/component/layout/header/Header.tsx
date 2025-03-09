"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Logo</h1>
          <div className={scss.pages}>
            <Link href="/">Главаня</Link>
            <Link href="/">Оборудование</Link>
            <Link href="/">О компании</Link>
            <Link href="/contact">Контакты</Link>
          </div>
          <div className={scss.target}>
            <select>
              <option value="ru">Русский</option>
              <option value="en">English</option>
              <option value="tr">Turkey</option>
            </select>
            <a>
              <FaPhone />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
