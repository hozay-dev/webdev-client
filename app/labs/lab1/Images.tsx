export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet: <br />
      <img
        id="wd-starship"
        width={400}
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        alt="Starship rocket stages being stacked on the launch pad"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height={200}
        alt="Tesla Bot humanoid robot standing"
      />
      <br />
      Another remote image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        src="https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg"
        alt="Apollo 11 astronaut on the Moon"
      />
      <br />
      My hometown, Baní, Dominican Republic:
      <br />
      <img
        id="wd-your-image"
        src="/images/bani.jpg"
        height={250}
        alt="Crowd at an outdoor evening celebration in Baní, Dominican Republic, with mountains and a sunset sky behind"
      />
    </div>
  );
}
