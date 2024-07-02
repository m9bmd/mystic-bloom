import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, StarHalf } from "lucide-react";
import { reviews } from "@/lib/data";
const CustomerReviews = () => {
  return (
    <div className="info ">
      <h2 className="info-label">user testimonials</h2>
      <div className=" info-description">
        <Carousel>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.username} className="basis-1/2 ">
                <div className="border border-slate-300  px-4 py-2 rounded-md flex flex-col gap-4 h-72">
                  <h2 className="font-medium text-md  flex-1 ">{review.review}</h2>
                  <RatingsStars ratings={review.ratings} />
                  <p className="font-medium">@{review.username}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pt-4 flex gap-2">
            <CarouselPrevious className="" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReviews;

function RatingsStars({ ratings }: { ratings: number }) {
  return (
    <div className="flex gap-1 text-yellow-500 border-yellow-500">
      {[...Array(ratings)].map((_,index) => (
        <Star key={index} fill="yellow" strokeWidth={0.75} />
      ))}
    </div>
  );
}
