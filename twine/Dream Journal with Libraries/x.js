  sine.freq(200);
}

void draw()
{
    if (millis() < 10000) {
    if (inByte > maxVal) {
      maxVal = inByte;}
    if (inByte < minVal) {
      minVal = inByte;} 
      } else {
         
   if (inByte > ((minVal+maxVal)/2)){
    sine.amp(1.0);
  } else {
    sine.amp(0);
  }
  }