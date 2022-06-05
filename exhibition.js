window.addEventListener("DOMContentLoaded", loadContent);
let _APP = null;

class Exhibition {
  constructor(exhibitionData, eventsData) {
    this._exhibitionData = exhibitionData;
    this._eventsData = eventsData;
    this._Init();
  }

  _Init() {
    this._exhibitionData.forEach((exhibition) => {
      if (Number(exhibition["on-view"])) {
        this._ShowCurrentExhibition(exhibition);
      } else {
        this._ShowPastExhibitions(exhibition);
      }
    });
    hideLoader();

    this._eventsData.forEach((event) => this._ShowEvents(event));
  }

  _ShowCurrentExhibition(exhibition) {
    let pageTitle = document.querySelector("title");
    let exhibitionTitle = document.querySelector(".exhibition-title");
    let exhibitionDates = document.querySelector(".exhibition-dates");
    let viewStatus = document.querySelector(".on-view");
    let exhibitionImg = document.querySelector(
      "#current-exhibition_hero > div"
    );
    let exhibitionAbout = document.querySelector(".extended-info");
    let exhibitionArtists = document.querySelector(".artists-list ul");
    let exhibitionCurated = document.querySelector("#curator");
    let exhibitionSupported = document.querySelector("#support");
    let exhibitionConsultation = document.querySelector("#consultation");
    let exhibitionSound = document.querySelector("#sound-design");
    let exhibitionDocumentation = document.querySelector("#documentation");

    pageTitle.textContent = `${exhibition.title.rendered} - Exhibitions`;
    exhibitionTitle.textContent = exhibition.title.rendered;
    exhibitionDates.textContent = `${exhibition["start-date"]} - ${exhibition["end-date"]}`;
    exhibitionImg.style.backgroundImage = `url(${exhibition.thumbnail.guid})`;
    viewStatus.textContent = "On View";
    exhibitionAbout.textContent = exhibition["about-exhibition"];

    exhibitionCurated.textContent = exhibition["curated_by"];
    exhibitionSupported.textContent = exhibition["sound_design"];
    exhibitionSound.textContent = exhibition["sound_design"];
    exhibitionDocumentation.textContent = exhibition["documentation"];
    exhibitionConsultation.textContent = exhibition["consultation"];

    // console.log(exhibition.artists.split(/\(.*?\)|(,)/));
  }

  _ShowPastExhibitions(exhibition) {
    let template = document.querySelector("#temp-exhibitions").content;
    let parent = document.querySelector("#past-exhibitions .container");
    let clone = template.cloneNode(true);
    let exhibitionTitle = clone.querySelector(".past-title");
    let exhibitionDates = clone.querySelector(".exhibition-date");
    let exhibitionDescription = clone.querySelector(".exhibition-info");

    exhibitionTitle.textContent = exhibition.title.rendered;
    exhibitionDates.textContent = `${exhibition["start-date"]} - ${exhibition["end-date"]}`;
    exhibitionDescription.textContent = exhibition["short-description"];

    parent.append(clone);
  }

  _ShowEvents(event) {
    let template = document.querySelector("#temp-events").content;
    let parent = document.querySelector("#past-events .container");
    let clone = template.cloneNode(true);
    let eventTitle = clone.querySelector(".event-title");
    let eventDates = clone.querySelector(".event-date");
    let eventDescription = clone.querySelector(".event-info");

    eventTitle.textContent = event.title.rendered;
    eventDates.textContent = `${event["date-time"]}`;
    eventDescription.textContent = event["short-description"];

    parent.append(clone);
  }
}

async function loadContent() {
  let linkExhibition = "https://lucaszago.dk/vlp/wp-json/wp/v2/exhibitions";
  let linkEvents = "https://lucaszago.dk/vlp/wp-json/wp/v2/event";
  const responseExhibition = await fetch(linkExhibition);
  const responseEvents = await fetch(linkEvents);
  const exhibitionData = await responseExhibition.json();
  const eventsData = await responseEvents.json();

  _APP = new Exhibition(exhibitionData, eventsData);
}
