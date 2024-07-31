import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface Order {
  id: string;
  date: string;
  total: number;
}

interface Address {
  street: string;
  city: string;
  zip: string;
}

interface PaymentMethod {
  type: string;
  last4: string;
  expiry: string;
}
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  userName = 'Weyvaloz';
  userEmail = 'weyvaloz@example.com';

  orders: Order[] = [
    { id: '123', date: '2023-01-01', total: 1500 },
    { id: '124', date: '2023-02-15', total: 2000 },
  ];

  addresses: Address[] = [
    { street: 'Улица 1', city: 'Город', zip: '123456' },
    { street: 'Улица 2', city: 'Город', zip: '654321' },
  ];

  paymentMethods: PaymentMethod[] = [
    { type: 'Visa', last4: '1234', expiry: '12/24' },
    { type: 'MasterCard', last4: '5678', expiry: '11/23' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
