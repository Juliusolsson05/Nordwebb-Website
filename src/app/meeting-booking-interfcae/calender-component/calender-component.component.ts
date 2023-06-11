import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

@Component({
  selector: 'app-calender-component',
  templateUrl: './calender-component.component.html',
  styleUrls: ['./calender-component.component.css'],
})
export class CalenderComponentComponent {
  calendarOptions: CalendarOptions = {
    editable: false,
    locale: 'sv',
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
    events: {
      googleCalendarId:
        'c_4b34c30c3cd02c8b6bf473c9a298167ba224521f854a24aff7e67b3667607556@group.calendar.google.com',
      googleCalendarApiKey: 'AIzaSyDXwMNdUkxsOhZOSp9JlpzSjPWnD3XceaI',
      className: 'gcal-event',
      color: 'black',
    },
    eventDidMount: function (info) {
      let titleColorMap: { [key: string]: string } = {
        'Kundmöte - enkel plan': 'var(--pink-color)',
        'Kundmöte - standard plan': 'var(--purple-color)',
        'Kundmöte - premium plan': 'var(--blue-color)',
        'Kundmöte - uppföljning': 'rgb(187 247 208 / 1.0)',
        'Kundmöte - annat': 'rgb(204 251 241 / 1.0)',
        'Kundmöte - konsultation': 'rgb(209 250 229 / 1.0)'
      };
      let eventTitle: string = info.event.title;
      info.el.style.backgroundColor = titleColorMap[eventTitle]
        ? titleColorMap[eventTitle]
        : '';
    },
    validRange: {
      start: new Date(), // Startdatum är dagens datum
      end: new Date(
        new Date().getFullYear() + 1,
        new Date().getMonth(),
        new Date().getDate()
      ),
    },
    weekends: false,
    dateClick: (info) => {
      if (this.previous_active != '') {
        this.previous_active.style.backgroundColor = ''
      }
      info['dayEl'].style.backgroundColor = 'rgba(209, 3, 255, 0.100)';
      this.previous_active = info['dayEl']
      // Gör något här, t.ex. visa en popup, navigera till en annan sida osv.
    },
  };

  previous_active: any = '';

  activeMeeting(container: Number) {
    console.log(container);
  }
}

//c_4b34c30c3cd02c8b6bf473c9a298167ba224521f854a24aff7e67b3667607556@group.calendar.google.com
//AIzaSyDXwMNdUkxsOhZOSp9JlpzSjPWnD3XceaI
