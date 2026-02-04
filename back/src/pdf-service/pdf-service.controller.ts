import { Controller } from '@nestjs/common';
import { PdfServiceService } from './pdf-service.service';
import { Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('pdf-service')
export class PdfServiceController {
  constructor(private readonly pdfServiceService: PdfServiceService) {}

  @Get('pdf')
generatePdf(@Res() res: Response) {
  const buffer = this.pdfServiceService.generatePdfWithContent('Rapport', 'Rapport mensuel', 'Contenu du rapport mensuel.');
  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="rapport.pdf"',
  });
  res.send(buffer);
}

@Get('quote')
generateQuote(@Res() res: Response) {
  const buffer = this.pdfServiceService.generateQuotePdf(
    'Jean Dupont',
    'TravelCo',
    {
      vehicleLabel: 'Location véhicule (SUV)',
      vehiclePrice: 450.00,
      accommodationLabel: 'Hôtel 4 étoiles (5 nuits)',
      accommodationPrice: 850.00,
      tripLabel: 'Visite guidée & activités',
      tripPrice: 320.00,
    }
  );

  res.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename="devis.pdf"',
  });
  res.send(buffer);
}
}
