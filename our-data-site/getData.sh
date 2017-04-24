#!/bin/bash
# - retrieve the CSO JSON-stat dataset request
# - converts to JSON saving the output to public/bin

echo -en "\ec"
echo -e "*************************************************"
echo -e "Please enter the requested CSO dataset (e.g. EP001): "
echo -e "*************************************************"
echo -e ""
read requestDataset
echo -e ""
echo -e "*************************************************"

curl http://www.cso.ie/StatbankServices/StatbankServices.svc/jsonservice/responseinstance/$requestDataset -o $requestDataset.jsonstat

jsonstat2arrobj $requestDataset.jsonstat dist/bin/$requestDataset.json

rm $requestDataset.jsonstat

echo -e ""
echo -e "*************************************************"
echo -e "That should be that!"
echo -e "*************************************************"
