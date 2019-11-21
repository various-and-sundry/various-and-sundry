/*
   Seven_Function_Roboquad-Controller

   Based on IRremote: IRsendRawDeme

   2/17/2019
*/


#include <IRremote.h>

IRsend irsend;

void setup()
{
  Serial.begin(9600);
}

void loop() {
  unsigned int HeadClockwise[] = {6600, 800, 900, 3400, 900, 3450, 850, 800, 850, 3450, 850, 850, 850, 800, 850, 850, 850, 3450, 850, 800, 850, 850, 850, 3450, 850};
  unsigned int HeadCounterClockwise[] = {6650, 800, 850, 3450, 850, 3450, 850, 800, 850, 3450, 900, 800, 850, 800, 850, 850, 850, 3450, 850, 850, 850, 3450, 850, 800, 850};
  unsigned int WalkForward[] = {6550, 850, 850, 3450, 850, 3450, 850, 850, 800, 850, 850, 800, 850, 850, 800, 850, 850, 850, 800, 850, 850, 900, 750, 3500, 850};
  unsigned int WalkBackward[] = {6550, 850, 850, 3450, 850, 3450, 850, 800, 850, 800, 900, 800, 850, 800, 850, 850, 850, 800, 850, 850, 850, 3450, 850, 850, 850 };
  unsigned int RotateClockwise[] = {6650, 850, 850, 3450, 850, 3450, 850, 800, 850, 800, 850, 850, 850, 800, 850, 850, 850, 3450, 850, 800, 900, 800, 850, 3450, 850 };
    unsigned int RotateCounterClockwise[] = {6650, 800, 850, 3450, 850, 3450, 850, 800, 850, 850, 850, 800, 850, 850, 800, 850, 850, 3450, 850, 850, 850, 3450, 850, 850, 800 };
    unsigned int Stop[] = {6650, 800, 850, 3450, 850, 3450, 850, 800, 900, 800, 850, 800, 850, 850, 850, 800, 850, 850, 850, 800, 850, 850, 850, 800, 850 };



    String command;

    /// String headRight = "headRight";
    //String headLeft = "headLeft";


    while (Serial.available() > 0) {

      command = Serial.readString();

      if (command.indexOf("headRight") > -1) {
        irsend.sendRaw(HeadClockwise, sizeof(HeadClockwise) / sizeof(HeadClockwise[0]), 38);
        Serial.println("HeadClockwise");
      }

      if (command.indexOf("headLeft") > -1) {
        irsend.sendRaw(HeadCounterClockwise, sizeof(HeadCounterClockwise) / sizeof(HeadCounterClockwise[0]), 38);
        Serial.println("HeadCounterClockwise");
      }

      if (command.indexOf("Forward") > -1) {
        irsend.sendRaw(WalkForward, sizeof(WalkForward) / sizeof(WalkForward[0]), 38);
        Serial.println("Walk Forward");
      }


      if (command.indexOf("Backward") > -1) {
        irsend.sendRaw(WalkBackward, sizeof(WalkBackward) / sizeof(WalkBackward[0]), 38);
        Serial.println("Walk Backward");
      }

      if (command.indexOf("Right") > -1) {
        irsend.sendRaw(RotateClockwise, sizeof(RotateClockwise) / sizeof(RotateClockwise[0]), 38);
        Serial.println("Rotate Clockwise");
      }

      if (command.indexOf("Left") > -1) {
        irsend.sendRaw(RotateCounterClockwise, sizeof(RotateCounterClockwise) / sizeof(RotateCounterClockwise[0]), 38);
        Serial.println("Rotate Counter-Clockwise");
      }


      if (command.indexOf("Stop") > -1) {
        irsend.sendRaw(Stop, sizeof(Stop) / sizeof(Stop[0]), 38);
        Serial.println("Stop");
      }
    }
  }
