import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
  faqs = [
    {
      question: 'How do I get a virtual card?',
      answer:
        'After signing in to the platform, click on cards from the navigation bar and then proceed to create a virtual card. You can either create a Dollar card or a Naira card.',
      open: false,
    },
    {
      question: 'How much do I get charged for online transactions?',
      answer: 'Charges depend on the type of transaction and amount.',
      open: false,
    },
    {
      question: 'How much is the maintenance fee for your dollar cards?',
      answer: 'The maintenance fee is $1 per month.',
      open: false,
    },
    {
      question: 'Do I get charged for withdrawals?',
      answer: 'Yes, withdrawal charges vary based on the amount.',
      open: false,
    },
    {
      question: 'What’s the maximum amount I can transfer to other banks?',
      answer: 'The maximum amount is determined by your account type.',
      open: false,
    },
    {
      question: 'What happens if I don’t redeem my QR Code reward?',
      answer: 'The QR Code reward will expire after a certain period.',
      open: false,
    },
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
 
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  }
