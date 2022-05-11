import React from "react";
import PageContainer from "../PageContainer/PageContainer";
import Section from "../Layouts/Section";
import Link from "../Link";

export default function ProfilePage() {
  return (
    <PageContainer heading="Profile">
      <Section className="max-w-screen-md">
        <div>
          <div className="flex items-center justify-between p-5 bg-white border-b">
            <div className="font-medium">
              <div className="text-blue-600 text-xl">
                Your Personal Information
              </div>
              <p>Update your personal information</p>
            </div>
            <Link to="/app/profile/settings" as="button">
              Edit Profile
            </Link>
          </div>
          <div className="bg-white p-5">
            <ul className="block w-full space-y-4 text-gray-600">
              <li className="flex justify-between items-center">
                First Name <span>Justice</span>
              </li>
              <li className="flex justify-between items-center">
                Last Name <span>Ekemezie</span>
              </li>
              <li className="flex justify-between items-center">
                Email <span>ttebify@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between p-5 bg-white border-b">
            <div className="font-medium">
              <div className="text-blue-600 text-xl">
                Your Personal Information Update your personal information
              </div>
            </div>
          </div>
          <div className="bg-white p-5 text-gray-600">
            <ul>
              <li className="flex justify-between items-center">
                Investor Type <span>Contributor</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
