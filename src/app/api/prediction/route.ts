import { NextRequest, NextResponse } from 'next/server';
import { getPrediction } from '../../../../api';
import { BodyM } from '../../../../api/prediction/getPrediction';

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      const data: BodyM = await req.json();      
      const prediction = await getPrediction(data);
      return NextResponse.json(prediction)
    } catch (error) {
      return NextResponse.json({error})
    }
  } else {
    return NextResponse.json({error: 'Method not allowed'})
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({message: 'HELLO'})
}