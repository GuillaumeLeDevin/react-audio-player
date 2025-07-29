export default function timeFormat(time) {
    const minutes = (time / 60) < 10 ? `0${Math.trunc(time / 60)}` : Math.trunc(time / 60)
    const seconds = (time % 60) < 10 ? `0${Math.trunc(time % 60)}` : Math.trunc(time % 60)

    return `${minutes}:${seconds}`
}