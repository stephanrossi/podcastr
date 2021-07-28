import styles from "./styles.module.scss"

import Image from "next/image"
import Link from "next/link"

import logo from "../../../public/icons/logo.svg"

import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  })

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <Image src={logo} alt="Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir sempre</p>
      <span>{currentDate}</span>
    </header>
  )
}
