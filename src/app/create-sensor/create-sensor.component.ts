import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SensorRequestDto } from '../model/sensor-request-dto';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-create-sensor',
  templateUrl: './create-sensor.component.html',
  styleUrls: ['./create-sensor.component.css']
})
export class CreateSensorComponent implements OnInit {

  constructor(private sensorService: SensorService, private router: Router) { }

  ngOnInit(): void {
  }

  createSensor(form: NgForm): void {
    const sensor = new SensorRequestDto(
      form.value.id,
      form.value.name,
      form.value.model,
      form.value.idType,
      form.value.idUnit,
      form.value.location,
      form.value.description,
      form.value.rangeFrom,
      form.value.rangeTo);
    console.log(sensor);
    this.sensorService.createSensor(sensor).subscribe(() => {
      this.router.navigateByUrl('/sensors');
    });
  }
}
