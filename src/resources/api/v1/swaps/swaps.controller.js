import { Bike, Asset, Swap } from '../../../../database/models';
import { OK } from '../../../../constants/statusCodes';
import jsonResponse from '../../../../helpers/jsonResponse';

export const swapAsset = async (req, res) => {
  const {
    bike_id: bikeId,
    swap_station_id: swapStationId,
    power_used: powerUsed,
    dist_reading: newDistReading,
  } = req.body;

  const batteryToBeGiven = await Asset.findOne({
    where: {
      swap_station_id: swapStationId,
      type: 'battery',
    },
  });

  const previousSwapped = await Swap.findOne({
    where: {
      bike_id: bikeId,
    },
  });

  const bike = await Bike.findOne({
    where: {
      id: bikeId,
    },
  });

  let batteryDispatchedPowerRemaining;

  batteryDispatchedPowerRemaining = previousSwapped.power_remaining;

  if (!previousSwapped) {
    batteryDispatchedPowerRemaining = 100;
  }

  const usedPower = batteryDispatchedPowerRemaining - powerUsed;

  const cost = usedPower * 12; // replace with the cost per unit

  const distCovered = newDistReading - bike.dist_reading;

  const swapData = {
    asset_id_returned: bike.asset_id,
    asset_id_taken: batteryToBeGiven.id,
    bike_id: bikeId,
    power_remaining: batteryDispatchedPowerRemaining,
    power_used: usedPower,
    cost,
    distance: distCovered,
  };

  await Swap.createOne(swapData);

  await bike.update({
    dist_reading: newDistReading,
  });

  await batteryToBeGiven.update({
    swapStationId: null,
    bike_id: bikeId,
  });

  return jsonResponse({
    res,
    status: OK,
    message: 'battery swapped',
    data: swapData,
  });
};
