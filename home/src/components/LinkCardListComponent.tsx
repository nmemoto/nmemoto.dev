import LinkCardComponent from "./LinkCardComponent";

export default function LinkCardListComponent() {
    return (
        <ul>
            <li><LinkCardComponent href="https://github.com/nmemoto" name="GitHub" /></li>
            <li><LinkCardComponent href="https://twitter.com/nmemoto" name="X(Twitter)" /></li>
            <li><LinkCardComponent href="https://bsky.app/profile/nmemoto.bsky.social" name="bluesky" /></li>
            <li><LinkCardComponent href="https://zenn.dev/nmemoto" name="Zenn" /></li>
            <li><LinkCardComponent href="https://sizu.me/nmemoto" name="しずかなインターネット" /></li>
            <li><LinkCardComponent href="https://speakerdeck.com/nmemoto" name="Speaker Deck" /></li>
        </ul>
    )
}