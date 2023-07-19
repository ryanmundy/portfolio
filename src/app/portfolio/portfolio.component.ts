import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public bigfootProjectMedia = [
    {
      "title": "Home View",
      "image": "bigfoot-home.png"
    },
    {
      "title": "Sightings View",
      "image": "bigfoot-sightings.png"
    },
    {
      "title": "Report Sighting View",
      "image": "bigfoot-report-new.png"
    },
    {
      "title": "View Sighting Detail View",
      "image": "bigfoot-view-sighting.png"
    },
    {
      "title": "Map View",
      "image": "bigfoot-map.png"
    }
  ];

  public caffeinatedProjectMedia = [
    {
      "title": "Home View",
      "image": "caffeinated-home.png"
    }
  ];

  public loavesAndFishesProjectMedia = [
    {
      "title": "Admin View",
      "image": "admin-view.png"
    },
    {
      "title": "Meal Counter",
      "image": "meal-counter.png"
    },
    {
      "title": "Meal Counter With Demographics",
      "image": "demographic-form.png"
    },
    {
      "title": "Report Generator",
      "image": "report-form.png"
    },
    {
      "title": "Generated Report",
      "image": "reports.png"
    },
    {
      "title": "Manage Users",
      "image": "manage-users.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
