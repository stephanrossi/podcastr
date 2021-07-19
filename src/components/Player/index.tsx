import styles from "./styles.module.scss"

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/icons/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/icons/shuffle.svg" alt="Aleatório" />
          </button>
          <button type="button">
            <img src="/icons/play-previous.svg" alt="Anterior" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/icons/play.svg" alt="Tocar" />
          </button>
          <button type="button">
            <img src="/icons/play-next.svg" alt="Próximo" />
          </button>
          <button type="button">
            <img src="/icons/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  )
}
