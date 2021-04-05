import { Component, OnInit } from '@angular/core';
import {SensorResponseDto} from '../model/sensor-response-dto';
import {SensorService} from '../service/sensor.service';

const SENSORS: SensorResponseDto[] = [
  {id: 1, name: 'sensor', model: 'sad', typeName: 'Voltage', unitName: 'Bar', location: 'room 1', rangeFrom: 10,
    rangeTo: 15, description: 'is working'},
  {id: 2, name: 'sensor 2', model: 'sad', typeName: 'Voltage', unitName: 'Bar', location: 'room 1', rangeFrom: 10,
    rangeTo: 15, description: 'not working'},
  {id: 3, name: 'sensor 3', model: 'sad', typeName: 'Voltage', unitName: 'Bar', location: 'room 1',
    rangeFrom: 10, rangeTo: 15, description: 'is working'},
];
@Component({
  selector: 'app-sensors-list',
  templateUrl: './sensors-list.component.html',
  styleUrls: ['./sensors-list.component.css']
})

export class SensorsListComponent implements OnInit {

  constructor(/*private sensorService: SensorService*/) { }

  displayedColumns: string[] = ['name', 'model', 'type', 'unit', 'range', 'location'];
  dataSource = SENSORS;
  ngOnInit(): void {
//    this.sensorService.getAllSensors().subscribe( sensors => this.sensors = sensors);
  }
}
