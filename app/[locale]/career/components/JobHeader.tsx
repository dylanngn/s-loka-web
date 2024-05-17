import * as React from 'react';
import Image from 'next/image';

interface EmployeeInfoProps {
  department: string;
  quantity: number;
  workType: string;
  officeAddress: string;
  workHours: string;
  applicationDeadline: string;
}

const EmployeeInfo: React.FC<EmployeeInfoProps> = ({
  department,
  quantity,
  workType,
  officeAddress,
  workHours,
  applicationDeadline,
}) => {
  return (
    <div className="mt-14 text-xl text-cyan-950 max-md:mt-10 max-md:max-w-full">
      <span className="font-bold">Phòng ban: </span>
      {department}
      <br />
      <span className="font-bold">Số lượng: </span>
      {quantity}
      <br />
      <span className="font-bold">Hình thức làm việc:</span> {workType}
      <br />
      <span className="font-bold">Địa chỉ văn phòng:</span> {officeAddress}
      <br />
      <span className="font-bold">Giờ làm việc: </span>
      {workHours}
      <br />
      <span className="font-bold">Ngày hết hạn ứng tuyển:</span>{' '}
      {applicationDeadline}
    </div>
  );
};

const BackButton: React.FC = () => {
  return (
    <div className="flex gap-4 self-start px-3.5 py-2.5 mt-24 bg-white rounded-xl border border-solid border-cyan-950 text-teal-950 max-md:mt-10">
      <div className="my-auto text-3xl text-center">&lt;</div>
      <div className="flex-auto text-xl">Trở về trang trước</div>
    </div>
  );
};

export function JobHeader() {
  return (
    <div className="flex flex-col px-5">
      <h1 className="self-center text-3xl font-bold text-center text-cyan-950 max-md:max-w-full">
        NHÂN VIÊN PHÁT TRIỂN KINH DOANH
      </h1>
      <BackButton />
      <section className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              width={500}
              height={500}
              alt="Employee development"
              className="w-full aspect-[1.69] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <EmployeeInfo
              department="Kinh doanh (Sales Team)"
              quantity={2}
              workType="Tại văn phòng"
              officeAddress="Tầng 07, toà nhà VIệt Office, 14 Trương Quyền, Phường Võ Thị Sáu, Quận 03, Thành phố Hồ Chí Minh, Việt Nam"
              workHours="08h30 - 17h30, thứ 2 - thứ 6"
              applicationDeadline="30/6/2024"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
