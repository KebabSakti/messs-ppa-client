import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LocalRoute } from "../../common/config/local_route";
import { BookingModel } from "../../domain/entity/booking_model";
import { StateModel } from "../../domain/entity/state_model";
import { BookingInteractor } from "../../domain/interactor/booking_interactor";
import { BookingCard, BookingCardShimmer } from "../component/BookingCard";
import { EmptyCard } from "../component/EmptyCard";

function StatusPage(props: { bookingInteractor: BookingInteractor }) {
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState<StateModel<BookingModel[]>>({
    loading: true,
    data: [],
  });

  async function getBookingData() {
    try {
      const results = await props.bookingInteractor.collections();

      setBookingData({
        loading: false,
        data: results,
      });
    } catch (error: any) {
      setBookingData({
        loading: false,
        error: error.message,
      });

      toast.error(error.message, {
        toastId: 1,
      });
    }
  }

  function bookingOnClick(id: string) {
    navigate(`${LocalRoute.book}/${id}`);
  }

  async function init() {
    getBookingData();
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="drop-shadow h-14 w-full bg-surface fixed top-0 flex items-center px-4 z-10">
        <p className="text-onBackground text-xl font-semibold mx-auto">
          Booking
        </p>
      </div>
      <div className="overflow-auto h-full">
        <div className="mx-4 my-16 space-y-4 h-4/5">
          {bookingData.loading ? (
            [...Array(5)].map((_, i) => <BookingCardShimmer key={i} />)
          ) : bookingData.data?.length == 0 ? (
            <EmptyCard message="Data booking tidak ditemukan" />
          ) : (
            bookingData.data?.map((e) => (
              <BookingCard
                key={e.id}
                model={e}
                onClick={() => bookingOnClick(e.id!)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export { StatusPage };
