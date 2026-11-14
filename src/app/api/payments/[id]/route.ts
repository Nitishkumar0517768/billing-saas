import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Payment from '@/models/Payment';
import mongoose from 'mongoose';

type Props = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Props) {
  try {
    const { id } = await params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: 'Invalid payment ID' }, { status: 400 });
    }
    await connectDB();
    const payment = await Payment.findById(id)
      .populate('customer', 'name email')
      .populate('invoice', 'invoiceNumber total status');
    if (!payment) return NextResponse.json({ success: false, message: 'Payment not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: payment }, { status: 200 });
  } catch (error) {
    console.error('Fetch payment error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch payment' }, { status: 500 });
  }
}

