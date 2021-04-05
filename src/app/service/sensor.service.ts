import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SensorRequestDto} from '../model/sensor-request-dto';
import {Observable} from 'rxjs';
import {SensorResponseDto} from '../model/sensor-response-dto';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  baseUrl = 'http://localhost:8080/sensors';
  constructor(private httpClient: HttpClient) {
  }

  getAllSensors(): Observable<SensorResponseDto[]> {
    return this.httpClient.get<SensorResponseDto[]>(this.baseUrl);
  }

  createSensor(sensor: SensorRequestDto): Observable<void>{
    return this.httpClient.post<void>(this.baseUrl, sensor);
  }

  deleteSensor(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${(this.baseUrl)}/${id}`);
  }

  getSensor(id: number): Observable<SensorResponseDto> {
    return this.httpClient.get<SensorResponseDto>(`${(this.baseUrl)}/${id}`);
  }

  getDescription(id: number): Observable<string> {
    return this.httpClient.get<string>(`${(this.baseUrl)}/${id}/description`);
  }
}

