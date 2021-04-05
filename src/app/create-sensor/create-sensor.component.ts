import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SensorRequestDto} from '../model/sensor-request-dto';
import {SensorService} from '../service/sensor.service';

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.css']
})
export class CreateSensorComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
  }

  createSensor(form: NgForm): void {
    const sensor = new SensorRequestDto(
      form.value.name,
      form.value.model,
      form.value.idType,
      form.value.idUnit,
      form.value.location,
      form.value.description,
      form.value.rangeFrom,
      form.value.rangeTo);
    console.log(sensor);
    this.sensorService.createSensor(sensor).subscribe();
    form.resetForm();
  }
}
