export default function NumberGenerator() {
    const opts = [2, 2, 2, 4]
    return opts[Math.floor(Math.random() * opts.length)];
}